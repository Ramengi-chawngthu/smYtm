import SubHeading from './SubHeading';
import styles from './styles.module.css';
import { JetBrains_Mono } from 'next/font/google';
import { getPostById } from '@/sanity/sanity-utils';
import formatDate from '@/utils/date-utils';
import Link from 'next/link';
import Button from '@/app/components/Button';
import Image from 'next/image';
import { urlForImage } from '@/sanity/sanity-utils';

const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'] });

interface PostId {
  params: {
    id: string;
  };
}

async function Post({ params }: PostId) {
  const id = params.id;
  const post = await getPostById(id);

  if (!post.length) {
    return (
      <>
        <h1 className='text-8xl'>
          Sorry can&apos;t find what you&apos;re looking for
        </h1>
        <div className='mt-12 flex justify-center'>
          <Button>
            <Link href='./'>Go back</Link>
          </Button>
        </div>
      </>
    );
  }

  const {
    _createdAt,
    souls,
    author,
    title,
    nationName,
    teams,
    nationNews,
    prayerPoints,
    mainImage,
  } = post[0];
  const date = formatDate(_createdAt);
  const imageUrl =
    mainImage &&
    urlForImage(mainImage)?.height(600).fit('clip').url();

  return (
    <div className='mx-auto max-w-3xl px-4 pb-20 sm:px-6 xl:max-w-5xl xl:px-0'>
      <article>
        <div>
          <header>
            <div className='space-y-1 border-b border-gray-200 pb-10 text-center '>
              <dl>
                <div>
                  <dt className='sr-only'>Published on</dt>
                  <dd className='text-2xl font-medium leading-6 text-gray-500'>
                    <time>{date}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 mt-4'>
                  {title}
                </h1>

                <div className='flex justify-between mt-8'>
                  <h2
                    className={
                      'text-center mt-4 font-medium text-base sm:text-xl' +
                      ' ' +
                      jetBrains_Mono.className
                    }
                  >
                    <Link href='./'>
                      <Button>Go Back</Button>
                    </Link>
                  </h2>
                  <h2
                    className={
                      'text-center mt-4 ml-4 font-medium text-base sm:text-xl' +
                      ' ' +
                      jetBrains_Mono.className
                    }
                  >
                    Written by: {author}
                  </h2>
                </div>
              </div>
            </div>
          </header>

          <div className={'pt-4 ' + styles.post}>
            {mainImage !== null && (
              <div
                className='w-full mt-12'
                style={{ maxHeight: 600, overflow: 'hidden' }}
              >
                <Image
                  src={imageUrl}
                  sizes='100vw'
                  width={0}
                  height={0}
                  style={{
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    aspectRatio: '4 / 3',
                  }}
                  alt={`${title} image`}
                />
              </div>
            )}
            <SubHeading subHeading={nationName} body={nationNews} />
            {souls !== null && (
              <SubHeading subHeading={'Thlarau bo chungchang'} body={souls} />
            )}
            {teams !== null && (
              <SubHeading
                subHeading={'Rawngbawlpui(Teams) chungchang'}
                body={teams}
              />
            )}
            {prayerPoints[0].length > 0 && (
              <SubHeading
                subHeading={'Tawngtai Thupui(Prayer Points)'}
                prayerPoints={prayerPoints}
              />
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Post;
