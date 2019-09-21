import React from 'react'
import Link from 'gatsby-link'
import HomeNav from './HomeNav'

const Header = ({ image, title, tagline }) => 
    <header className="site-header outer" style={{backgroundImage: 'url('+ image + ')'}}>
        <div className="inner">
            <div className="site-header-content">
                <h1 className="site-title">
                    { title }
                </h1>
                <h2 className="site-description">
                    { tagline }
                </h2>
            </div>
            <HomeNav />
        </div>
		<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- tstex -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9869955942583035"
     data-ad-slot="8211889132"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
    </header>

export default Header