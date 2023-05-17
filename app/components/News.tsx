
import Link from "next/link";
import Button from "./Button";
import { JetBrains_Mono } from "next/font/google";
import formatDate from '@/utils/date-utils';
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

interface postType{
    date: string,
    _id: string,
    author: string,
    slug: string,
    title: string,
  }
  


function News({date, title, slug, author, _id}: postType) {

    const newDate = formatDate(date);

    return (
        <div className="divide-y-2 divide-gray-300">
            <Content title={title} slug={slug} author={author} date={newDate} _id={_id}/>
        </div>
    )
}

function Content({title, slug, author, date, _id}:postType) {
    return (
        <div className="py-12">
            <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt>Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500">
                            <time>{date}</time>
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <Link href={`/posts/${_id}`}>
                                    <h2 className="text-3xl font-bold leading-8 tracking-tight ">{title}</h2>
                                </Link>
                            </div>
                            <div className="prose max-w-none text-gray-600 text-xl">
                                {slug}
                            </div>
                        </div>
                        <div className="flex justify-between text-base font-medium leading-6">
                            <Link href={`/posts/${_id}`}><Button>Read More ➤</Button></Link>
                            <span className={jetBrains_Mono.className}>Written by: {author}</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default News;