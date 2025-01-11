import React, { useEffect, useState } from "react";
import profile from '../assets/profile.jpg'

const Feed = () => {
    const [posts, setPosts] = useState([]); // State for posts
    const [users, setUsers] = useState([]); // State for users
    const [page, setPage] = useState(1); // Track current page for pagination
    const [loading, setLoading] = useState(false); // Loading indicator
    const [hasMore, setHasMore] = useState(true); // Stop loading if no more data
    const [likedPosts, setLikedPosts] = useState([]); // Track liked posts

    // Fetch posts function with pagination
    const fetchPosts = async (page) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
            );
            const data = await response.json();

            // Add random data (views and hours ago) to each post
            const postsWithRandomData = data.map((post) => ({
                ...post,
                views: Math.floor(Math.random() * 10000) + 1, // Random views
                hoursAgo: Math.floor(Math.random() * 10) + 1, // Random hours
            }));

            // Check if there are no more posts
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setPosts((prevPosts) => [...prevPosts, ...postsWithRandomData]); // Append new posts
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
        setLoading(false);
    };

    // Fetch users once on mount
    const fetchUsers = async () => {
        const userResponse = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const userData = await userResponse.json();
        setUsers(userData);
    };

    // Call initial posts and users fetch
    useEffect(() => {
        fetchPosts(page);
        fetchUsers();
    }, [page]);

    // Scroll detection for infinite scrolling
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight &&
            !loading &&
            hasMore
        ) {
            setPage((prevPage) => prevPage + 1); // Increment page
        }
    };

    // Toggle like for a specific post
    const handleToggleLike = (postId) => {
        // Toggle the liked state for the post
        const updatedLikedPosts = likedPosts.includes(postId)
            ? likedPosts.filter((id) => id !== postId) // Remove post from liked
            : [...likedPosts, postId]; // Add post to liked

        setLikedPosts(updatedLikedPosts);

        // Store the updated liked posts in localStorage
        localStorage.setItem("likedPosts", JSON.stringify(updatedLikedPosts));
    };

    // Retrieve liked posts from localStorage on initial load
    useEffect(() => {
        const savedLikedPosts = localStorage.getItem("likedPosts");
        if (savedLikedPosts) {
            setLikedPosts(JSON.parse(savedLikedPosts)); // Convert string back to array
        }
    }, []); // Only run once on mount

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore]);

    // Get username by userId
    const getUserName = (userId) => {
        const user = users.find((u) => u.id === userId);
        return user ? user.name : "Unknown User";
    };

    return (
        <div className="p-4">
            <div className="flex justify-between pb-3 px-3">
                <h1 className="font-extrabold text-xl">Feeds</h1>
                <div className="gap-4 hidden md:flex">
                    <h1 className="font-bold text-gray-400 text-lg ">Recent</h1>
                    <h1 className="font-bold text-lg">Friends</h1>
                    <h1 className="font-bold text-gray-400 text-lg">Popular</h1>
                </div>
            </div>

            {posts.map((post, index) => (
                <div
                    key={`${post.id}-${index}`}
                    className={`hover:bg-[#D9EAFD] hover:drop-shadow-lg rounded-xl p-4 mb-6 ${index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-[#F8FAFC]"}`}
                >
                    <h1 className="font-semibold text-xl capitalize">{post.title}</h1>

                    <div className="flex justify-between items-center mb-2">

                        <div className="flex items-center mb-1">
                            {/* <img className="h-10 w-10 rounded-full" src={profile} alt="" /> */}
                            <div className="mt-1 flex gap-2">
                                {/* <h3 className="font-bold">By: {getUserName(post.userId)}</h3> */}
                                <span className="text-gray-500 text-sm">By: {getUserName(post.userId)}</span>
                                <span className="text-gray-500 text-sm">|</span>
                                <span className="text-gray-500 text-sm">{post.hoursAgo} hours ago</span>
                            </div>
                        </div>
                        <div>
                            {/* <i className="ri-more-2-fill border-2 border-zinc-300 rounded-full p-2"></i> */}
                        </div>
                    </div>
                    <p className="mt">{post.body}</p>
                    <div className="mt-3 flex font-semibold gap-5">
                        <div className="text-gray-400 flex gap-1">
                            <i className="ri-eye-fill font-normal"></i>
                            <p> {post.views}</p>
                        </div>
                        {/* <button
                            onClick={() => handleToggleLike(post.id)}
                            className={`flex gap-1 ${likedPosts.includes(post.id) ? "text-[#FB87A8]" : "text-gray-400"} hover:text-[FB87A8]`}
                        >
                            <i className="ri-heart-fill font-normal"></i>
                            Like
                        </button> */}
                        <div className="text- text-center relative ">
                            <button
                                className={`inline-flex gap-1  items-center justify-center cursor-pointer ${likedPosts.includes(post.id) ? "animate-like fill-red-500 stroke-none text-[#FB87A8]" : "fill-gray-400 text-gray-400 hover:text-[FB87A8]"
                                    } transition-all duration-500`}
                                onClick={() => handleToggleLike(post.id)}
                            >
                                <i className={`ri-heart-fill text-xl transition-all duration-500 ${likedPosts.includes(post.id)
                                        ? "text-[#FB87A8] animate-like"
                                        : "text-gray-400"
                                    }`}> </i>
                                     Like
                            </button>
                        </div>
                        <div className="text-gray-400 flex gap-1">
                            <i className="ri-chat-quote-fill font-normal"></i>
                            <p>Comment</p>
                        </div>
                    </div>
                </div>
            ))}

            {loading && <p className="text-center p-10 text-xl font-semibold"><svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
            </svg> Loading...</p>}
            {!hasMore && <p className="text-center p-10 text-xl font-semibold">No more posts to show</p>}
        </div>
    );
};

export default Feed;
