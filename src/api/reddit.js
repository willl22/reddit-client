export const API_ROOT = "https://reddit.com";

export const getCategoryPosts = async (category) => {
    const response = await fetch(`${API_ROOT}${category}.json`);
    const json = await response.json();

    return json.data.children.map((post) => post.data);
};

export const getPostComments = async (permalink) => {
    const response = await fetch(`${API_ROOT}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddit) => subreddit.data);
}