import { Link } from 'react-router-dom'
import { data } from '../../../utils/halpers/footer/data'

import classes from './Info.module.css'

const Info = () => {
    return (
        <div className='d-flex align-items-center'>
        <div className={`d-flex justify-content-evenly align-items-start ${classes.gap_20}`}>
            {data.titles.map((title, index) => {
                return (
                    <div key={title} className={`d-flex flex-wrap ${classes.gap_20}`}>
                        <span className={`d-flex flex-wrap ${classes.title} w-100`}>{title}</span>
                        <div className={`d-flex flex-wrap ${classes.gap_10}`}>
                            {data.data[index].map((item, index1) => {
                                return <Link key={item} className={`w-100 ${classes.link}`} to={`${data.links[index][index1]}`} onClick={() => window.scrollTo(0, 0)}>{item}</Link>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default Info