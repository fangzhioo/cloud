import React from 'react'
import {Link} from 'umi'

const HomePage: React.FC<{}> = () => {

  return (
    <div>
      <Link to="/article">文章</Link>
    </div>
  )
}


export default HomePage;
