import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const cardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((_, i) =>
            <div key={i} className="card jc-center">
                <Skeleton width={150} height={91}/>
                <div className="card__title">
                    <Skeleton  width={148} />
                    <Skeleton  width={80} />
                </div>
                <div className="card__priceBlock">
                    <div>
                        <Skeleton width={80} height={24}/>
                    </div>
                    <Skeleton width={32} height={32}/>
                </div>
            </div>
        )
    )
}

export default cardSkeleton;