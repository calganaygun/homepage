import PageTransition from '@comp/page-transition'
import PageTitle from '@comp/page-title'
import dynamic from 'next/dynamic'

const Photos = dynamic(() => import('@comp/photos'), {
    ssr: false
})

function ArtPage() {

    return (
        <PageTransition>
            <div className="c-small">
                <PageTitle>
                    stable diffusion/generative ai toolarıyla yaratıp hesabımda paylaştığım resimlerimin bazılarını burada bulabilirsiniz.
                </PageTitle>
            </div>

            <div className="c-large mt-20">
                <Photos data={[
                    {
                        id: 1,
                        links: {
                            html: 'https://www.instagram.com/p/CgteaChDpDK/'
                        },
                        urls: {
                            regular: '/photos/ai-art/1.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 2,
                        links: {
                            html: 'https://www.instagram.com/p/CgteaChDpDK/'
                        },
                        urls: {
                            regular: '/photos/ai-art/2.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 3,
                        links: {
                            html: 'https://www.instagram.com/p/CgteaChDpDK/'
                        },
                        urls: {
                            regular: '/photos/ai-art/3.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 4,
                        links: {
                            html: 'https://www.instagram.com/p/CgteaChDpDK/'
                        },
                        urls: {
                            regular: '/photos/ai-art/4.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 5,
                        links: {
                            html: 'https://www.instagram.com/p/ClZa6Qno4kR/'
                        },
                        urls: {
                            regular: '/photos/ai-art/5.jpeg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 6,
                        links: {
                            html: 'https://www.instagram.com/p/ClZa6Qno4kR/'
                        },
                        urls: {
                            regular: '/photos/ai-art/6.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 7,
                        links: {
                            html: 'https://www.instagram.com/p/ClZa6Qno4kR/'
                        },
                        urls: {
                            regular: '/photos/ai-art/7.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 8,
                        links: {
                            html: 'https://www.instagram.com/p/ClZa6Qno4kR/'
                        },
                        urls: {
                            regular: '/photos/ai-art/8.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 9,
                        links: {
                            html: 'https://www.instagram.com/p/CleQo3pMa_V/'
                        },
                        urls: {
                            regular: '/photos/ai-art/9.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 10,
                        links: {
                            html: 'https://www.instagram.com/p/CleQo3pMa_V/'
                        },
                        urls: {
                            regular: '/photos/ai-art/10.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 11,
                        links: {
                            html: 'https://www.instagram.com/p/CleQo3pMa_V/'
                        },
                        urls: {
                            regular: '/photos/ai-art/11.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 12,
                        links: {
                            html: 'https://www.instagram.com/p/CleQo3pMa_V/'
                        },
                        urls: {
                            regular: '/photos/ai-art/12.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 13,
                        links: {
                            html: 'https://www.instagram.com/p/ChB_uH6DegZ/'
                        },
                        urls: {
                            regular: '/photos/ai-art/13.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 14,
                        links: {
                            html: 'https://www.instagram.com/p/ChB_uH6DegZ/'
                        },
                        urls: {
                            regular: '/photos/ai-art/14.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 15,
                        links: {
                            html: 'https://www.instagram.com/p/ChB_uH6DegZ/'
                        },
                        urls: {
                            regular: '/photos/ai-art/15.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                    {
                        id: 16,
                        links: {
                            html: 'https://www.instagram.com/p/ChB_uH6DegZ/'
                        },
                        urls: {
                            regular: '/photos/ai-art/16.jpg'
                        },
                        width: 1024,
                        height: 1024
                    },
                ].sort(() => Math.random() - 0.5)
                } />
            </div>
        </PageTransition>
    )
}

export default ArtPage
