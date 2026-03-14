export default function PhotoCard({ photo, isFavourite, toggleFavourite }) {
    return (
        <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-gray-200 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
            {/* Main Image */}
            <img
                src={photo.download_url}
                alt={photo.author}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

             {/* Top Action Gradient (Floating Heart) */}
            <div className="absolute right-3 top-3 z-10">
                <button
                    onClick={() => toggleFavourite(photo.id)}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl backdrop-blur-md transition-all duration-300 active:scale-90 
                        ${isFavourite 
                            ? "bg-white/90 text-red-500 shadow-lg" 
                            : "bg-black/20 text-white hover:bg-white/40"
                        }`}
                >
                    <span className={`text-2xl transition-transform ${isFavourite ? "scale-110" : "scale-100"}`}>
                        {isFavourite ? "❤️" : "🤍"}
                    </span>
                </button>
            </div>

            {/* Bottom Info Overlay (Glassmorphism) */}
            <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex items-center justify-between rounded-2xl bg-black/40 p-4 backdrop-blur-xl border border-white/10 shadow-2xl">
                    <div className="flex flex-col overflow-hidden text-white">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-70">
                            Photographer
                        </span>
                        <p className="truncate text-sm font-medium tracking-tight">
                            {photo.author}
                        </p>
                    </div>
                    
                </div>
            </div>

            {/* Gradient Scrim (Makes text readable) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
    );
}