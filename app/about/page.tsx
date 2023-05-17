import styles from './styles.module.css'



function About() {
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl mt-12">
        He SM & YTM Movement hi 10/40 window huam chhung rama rawngbawla kal leh la kal tur ho chanchin ziahna a ni.
      </h1>
      <div>
        <h1 className={"text-center text-5xl md:text-8xl font-bold mt-36" + " " + styles.commission}>Thupek leh Thutiam Ropui tak chu 🗺</h1>
        <h2 className="text-center text-3xl md:text-5xl mt-32 font-bold">Thupek</h2>
        <p className="mt-16 text-3xl md:text-5xl text-center">Chutichuan, kal ula, <span className={styles.commission}>hnam tina mi</span> zirtîrahte siam ula, ...</p>
        <p className="text-right text-xl md:text-2xl mt-4 font-bold">Matthaia 28:19</p>
        <h2 className="text-center text-3xl md:text-5xl mt-20 font-bold">Thuthiam</h2>
        <p className="mt-16 text-3xl md:text-5xl text-center">Tin, he Ram Chanchin Ṭha hi <span className={styles.commission}>hnam zawng zawng</span> hriattîrna tûrin <span className={styles.commission}>khawvêl zawng zawngah</span> hrilin a awm ang a; chumi zawhah chuan <span className={styles.commission}>tâwpna</span> chu a lo thleng ang</p>
        <p className="text-right text-xl md:text-2xl mt-4 font-bold">Matthaia 24:14</p>
      </div>

    </>
  )
}

export default About;