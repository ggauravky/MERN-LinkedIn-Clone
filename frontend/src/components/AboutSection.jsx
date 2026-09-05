import { useState, useEffect } from "react";

const AboutSection = ({ userData, isOwnProfile, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [about, setAbout] = useState(userData?.about || "");

    useEffect(() => {
        setAbout(userData?.about || "");
    }, [userData?.about]);

    const handleSave = () => {
        setIsEditing(false);
        onSave({ about });
    };

    return (
        <div className='bg-white shadow rounded-lg p-6 mb-6'>
            <h2 className='text-xl font-semibold mb-4'>About</h2>
            {isOwnProfile ? (
                isEditing ? (
                    <>
                        <textarea
                            value={about}
                            onChange={(e) => setAbout(e.target.value)}
                            className='w-full p-2 border rounded focus:outline-none focus:border-primary'
                            rows='4'
                            placeholder='Tell us about yourself, your skills, experience, and passions...'
                        />
                        <div className='flex gap-2 mt-2'>
                            <button
                                onClick={handleSave}
                                className='bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300'
                            >
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    setAbout(userData?.about || "");
                                    setIsEditing(false);
                                }}
                                className='bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-300'
                            >
                                Cancel
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {userData?.about ? (
                            <p className='text-gray-700 whitespace-pre-line leading-relaxed'>{userData.about}</p>
                        ) : (
                            <p className='text-gray-400 italic'>You haven't added an about section yet. Click edit to add a summary about yourself.</p>
                        )}
                        <button
                            onClick={() => setIsEditing(true)}
                            className='mt-3 text-primary hover:text-primary-dark font-medium transition duration-300 block'
                        >
                            {userData?.about ? "Edit" : "Add About"}
                        </button>
                    </>
                )
            ) : (
                userData?.about ? (
                    <p className='text-gray-700 whitespace-pre-line leading-relaxed'>{userData.about}</p>
                ) : (
                    <p className='text-gray-400 italic'>No information provided.</p>
                )
            )}
        </div>
    );
};
export default AboutSection;
