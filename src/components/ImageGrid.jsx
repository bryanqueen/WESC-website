export function ImageGrid({Img1, Img2}){
    return (
        <div class="pr-12 sm:pr-0">
                <div class="relative max-w-lg mb-12">
                    <img class="object-bottom rounded-md" src={Img1} alt="" />

                    <img class="absolute origin-bottom-right scale-75 rounded-md -bottom-16 -right-16" src={Img2} alt="" />
                </div>
            </div>
    )
}
