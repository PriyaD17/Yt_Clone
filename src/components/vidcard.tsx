export function VideoCard() {
    return (
        <div>
            <img src="/thumbnail.jpg" className="rounded-xl" alt="" />
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1">
                    <img src="/thumbnail.jpg" className="rounded-full w-20 h-20" alt="" />
                </div>
                <div className="col-span-11 pl-1">
                    <div>Some Coding Video</div>
                    <div className="text-gray-600 text-base">The Fireship</div>
                    <div className="text-gray-600 text-base">12k | 3 days ago</div>
                </div>
            </div>
        </div>
    );
}
