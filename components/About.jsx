'use client'

import Image from 'next/image'
import {Button} from './ui/button'
import {motion} from 'framer-motion'
import {fadeIn} from '@/variants'

const About = () => {
    return <section className={`grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center`}
                    id={'about'}>
        {/*text*/}
        <motion.div
            variants={fadeIn('right', 0.2)}
            initial={`hidden`}
            whileInView={`show`}
            viewport={{once: true, amount: 0.2}}
            className={`xl:pl-[135px]`}>
            <h1 className={'mb-9 text-brown-heavy'}>Let's Talk About Sunrise Sips</h1>
            <p className={'mb-8'}>
                Sunrise Sips is where every morning begins with warmth and a burst of flavour and in the heart of Canberra. Nestled
                in the vibrant cityscape, our coffee shop is a haven for coffee enthusiasts but also acts as a family friendly space for parents
                with children. As the first rays of dawn paint the sky with hues of gold, we invite you to embark on a journey, awakening your
                senses with the rich aroma of freshly brewed coffee and the tantalizing taste of our Arabica beans.
            </p>
            <Button variant={'orange'} >Read more</Button>
        </motion.div>
        {/*img*/}
        <motion.div
            variants={fadeIn('left', 0.2)}
            initial={`hidden`}
            whileInView={`show`}
            viewport={{once: true, amount: 0.2}}>
            <Image src={'/about/img.png'} width={705} height={771} alt={''} className={'hidden xl:flex'}/>
        </motion.div>
    </section>;
}

export default About