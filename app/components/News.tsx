
import Link from "next/link";
import Button from "./Button";
import { JetBrains_Mono } from "next/font/google";
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });


function News() {
    return (
        <div className="divide-y-2 divide-gray-300">
            <Content />
        </div>
    )
}

function Content() {
    return (
        <div className="py-12">
            <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt>Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500">
                            <time>August 5,2021</time>
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <Link href='/posts/1'>
                                    <h2 className="text-3xl font-bold leading-8 tracking-tight ">New features</h2>
                                </Link>
                            </div>
                            <div className="prose max-w-none text-gray-600 text-xl">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque quasi necessitatibus eaque possimus obcaecati, mollitia magnam, sint numquam autem harum, quos ducimus! Quisquam repellendus voluptas rem assumenda quia, doloremque accusantium?
                            </div>
                        </div>
                        <div className="flex justify-between text-base font-medium leading-6">
                            <Link href='/posts/1'><Button>Read More ➤</Button></Link>
                            <span className={jetBrains_Mono.className}>Written by: Peka</span>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default News;