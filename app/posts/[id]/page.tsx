import SubHeading from './SubHeading';
import styles from './styles.module.css'
import { JetBrains_Mono } from "next/font/google";
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

interface PostId {
    params: {
        id: string
    }
}



function Post({ params }: PostId) {
    const id = Number(params.id);
    const title = 'Valley of Dry Bones'
    const author = 'Peka'
    const nation = 'Syria'
    const date = 'August 7, 2021'


    return (
        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 xl:max-w-5xl xl:px-0">
            <article>
                <div>
                    <header>
                        <div className="space-y-1 border-b border-gray-200 pb-10 text-center ">
                            <dl>
                                <div>
                                    <dt className='sr-only'>Published on</dt>
                                    <dd className='text-base font-medium leading-6 text-gray-500'>
                                        <time>{date}</time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                    {title}
                                </h1>
                                <h2 className={"text-right mt-4 font-medium" + " " + jetBrains_Mono.className}>Written by: {author}</h2>
                            </div>
                        </div>
                    </header>
                    <div className={"pt-4" + " " + styles.post}>
                        {/* content here */}
                        
                            <SubHeading subHeading={'Hnam(Nations) chungchang'} body={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, maxime at provident expedita magni necessitatibus quaerat incidunt aut itaque, voluptates culpa fuga voluptatum placeat! Sequi consectetur autem aut distinctio voluptatibus'} />
                    
                            <SubHeading subHeading={'Thlarau bo chungchang'} body={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, maxime at provident expedita magni necessitatibus quaerat incidunt aut itaque, voluptates culpa fuga voluptatum placeat! Sequi consectetur autem aut distinctio voluptatibus'} />

                            <SubHeading subHeading={'Rawngbawlpui(Teams) chungchang'} body={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, maxime at provident expedita magni necessitatibus quaerat incidunt aut itaque, voluptates culpa fuga voluptatum placeat! Sequi consectetur autem aut distinctio voluptatibus'} />

                            <SubHeading subHeading={'Tawngtai Thupui(Prayer Points)'} body={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, maxime at provident expedita magni necessitatibus quaerat incidunt aut itaque, voluptates culpa fuga voluptatum placeat! Sequi consectetur autem aut distinctio voluptatibus'} />

                    </div>
                </div>
            </article>
        </div>
    )



}


export default Post