import HeroBanner from "./HeroBanner"
import ComicsList from "./ComicsList"
import IconsList from "./IconsList"


export default function Main({ comicsArray, iconsArray }) {
    return (
        <main>
            <HeroBanner></HeroBanner>
            <ComicsList comicsArray={comicsArray}></ComicsList>
            <IconsList iconsArray={iconsArray}></IconsList>
        </main>
    )
}