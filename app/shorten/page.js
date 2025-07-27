"use client";
import { Code } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";


const shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setgenerated] = useState("");
  const [allLinks, setAllLinks] = useState([]);

  const fetchAllLinks = async () => {
    try {
      const response = await fetch(`/api/links/`, {
        method: "GET",
      }); // Calling the new API route
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAllLinks(data.links); // Update state with the fetched links
      } else {
        console.error("Failed to fetch links.");
      }
    } catch (error) {
      console.error("An error occurred while fetching links:", error);
    }
  };

  useEffect(() => {
    fetchAllLinks();
  }, []);

  const generate = () => {
    if (!url || !shortUrl) {
      alert("Please fill in both fields.");
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`);
        setShortUrl("");
        seturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/links/${id}`, { method: "DELETE" });


      if (response.ok) {
        setAllLinks(allLinks.filter((link) => link._id !== id));
        alert("Link deleted successfully!");
      } else {
        alert("Failed to delete the link.");
      }
    } catch (error) {
      console.error("An error occurred while deleting the link:", error);
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>
      <form onSubmit={() => {generate();fetchAllLinks()}} className="flex flex-col gap-2">
        <input
          className="px-4 py-2 focus:outline-purple-600 rounded-md bg-white"
          value={url}
          type="text"
          placeholder="Enter your URL"
          onChange={(e) => {
            seturl(e.target.value);
          }}
        />
        <input
          className="px-4 py-2 focus:outline-purple-600 rounded-md bg-white"
          value={shortUrl}
          type="text"
          placeholder="Enter your preferred URL text"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
        />
        <button
          onClick={() => {
            generate();
            fetchAllLinks();
          }}
          className="bg-purple-400 p-3 rounded-lg font-bold py-2 text-white my-3 cursor-pointer"
        >
          Generate
        </button>
      </form>

      <div className="mx-auto max-w-lg bg-gray-50 my-8 p-8 rounded-lg">
        <h2 className="font-bold text-2xl mb-4">Your Links</h2>
        <div className="flex flex-col gap-4">
          {allLinks.length > 0 ? (
            allLinks.map((link) => (
                
              <div key={link._id} className="p-4 bg-white rounded-md shadow-sm flex relative ">
                <div >
                <p className="font-semibold text-gray-500 break-all">
                  Original: {link.url}
                </p>
                <Link
                  target="_blank"
                  href={`${link.url}`}
                  className="font-bold text-purple-600 hover:underline break-all"
                >
                  {`${link.shorturl}`}
                </Link>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(link._id)}
                    className=""
                  >
                    <img src="delete.svg" alt="" className="h-6 cursor-pointer absolute bottom-2 right-2" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No links found. Generate one above!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default shorten;
