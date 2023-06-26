import axios from 'axios';
import { useState, useEffect } from 'react';

const YoutubeData = () => {
    const [subscriberCount, setSubscriberCount] = useState(0);
    const [videoCount, setVideoCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id={encodeURIComponent(UCi1r-Lw0qoggZO0ri-7GyTQ)}&key={encodeURIComponent(AIzaSyCY9iYEYvJk8u4NuK0Dk0r4gnllzPPoGhQ)}`
                );
                const data = response.data;
                const statistics = data.items[0].statistics;
                setSubscriberCount(statistics.subscriberCount);
                setVideoCount(statistics.videoCount);
                console.log('Fetched YouTube data:', data);
            } catch (error) {
                console.log('Error fetching YouTube data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Subscriber Count: {subscriberCount}</h2>
            <h2>Video Count: {videoCount}</h2>
        </div>
    )
}

export default YoutubeData
