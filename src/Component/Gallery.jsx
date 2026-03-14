import React, { useCallback, useMemo, useReducer, useState } from 'react';
import useFetchPhoto from '../Hooks/useFetchPhoto';
import PhotoCard from './PhotoCard';
import SearchBar from './SearchBar';
import { favouriteReducer, initalState } from '../reducer/FavouriteReducer';

const Gallery = () => {
    const [search, setSearch] = useState('');
    const { data, loading, error } = useFetchPhoto();
    const [state, dispatch] = useReducer(favouriteReducer, initalState);

    // Search by using useCallback
    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    // filer photo by using useMemo
    const filterPhoto = useMemo(() => {
        return data.filter((photo) => {
            return photo.author.toLowerCase().includes(search.toLowerCase());
        });
    }, [data, search]);

    // toggle favourite
    const toggleFavourite = (id) => {
        dispatch({ type: "TOGGLE_FAVOURITE", payload: id });
    };

    // loading  and error message
    if (loading) return <div className="flex h-screen items-center justify-center text-xl font-bold">Loading...</div>;
    if (error) return <div className="flex h-screen items-center justify-center text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8 md:px-8 rounded-2xl">
            {/* Search Bar Container */}
            <div className="mx-auto max-w-7xl mb-12 flex justify-between">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Photo Explorer</h1>
                <SearchBar search={search} onSearch={handleSearch} />
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                     {/* filer photo by using map */}
                    {filterPhoto.map((photo) => {
                        return (
                            <PhotoCard 
                                key={photo.id} 
                                photo={photo} 
                                isFavourite={state.favourite.includes(photo.id)} 
                                toggleFavourite={toggleFavourite} 
                            />
                        );
                    })}
                </div>

                {/* No Results Styling */}
                {filterPhoto.length === 0 && (
                    <div className="mt-20 text-center text-gray-400">
                        <p className="text-xl">No photos match your search.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;