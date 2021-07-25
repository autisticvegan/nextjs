import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import useInterval from 'react-useinterval'
import { useState } from 'react';

function Counter(props) {
  let [count, setCount] = useState(0.0);
 
  const formula = (props.increaseAmount * .05) / (525600 *  3000)

  const increaseCount = amount => {
    setCount(count + amount);
  };
 
  useInterval(increaseCount, 20, formula);
  const actualCount = (count > 100000) ? count.toFixed(0) : count.toFixed(2);
  return <h1>${actualCount}</h1>;
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lol Passive Income
        </h1>

        <p className={styles.description}>
          💸🤑💸 Since you opened this site, these people have made this much money PASSIVELY with 5% APY
        </p>
      
        <div className={styles.grid}>
            <div>
            <h3>Jeff</h3>
            <Image src={"/jeff.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={209200000000}></Counter>
          </div>

          <div>
            <h3>Bill</h3>
            <Image src={"/bill.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={131200000000}></Counter>
          </div>

          <div>
            <h3>Elon</h3>
            <Image src={"/elon.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={160100000000}></Counter>
          </div>

          <div>
            <h3>Mark</h3>
            <Image src={"/mark.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={133000000000}></Counter>
          </div>

          <div>
            <h3>Bernard</h3>
            <Image src={"/bernard.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={191400000000}></Counter>
          </div>

          <div>
            <h3>Harrison</h3>
            <Image src={"/h.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={300000000}></Counter>
          </div>

          <div>
            <h3>Warren</h3>
            <Image src={"/w.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={101100000000}></Counter>
          </div>

          <div>
            <h3>Oprah</h3>
            <Image src={"/o.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={2700000000}></Counter>
          </div>

          <div>
            <h3>Kanye</h3>
            <Image src={"/kkkkk.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={1800000000}></Counter>
          </div>

          <div>
            <h3>Barack</h3>
            <Image src={"/oo.jpg"} alt={"haha"} width={200} height={200}/>
            <Counter increaseAmount={70000000}></Counter>
          </div>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Autism and {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
