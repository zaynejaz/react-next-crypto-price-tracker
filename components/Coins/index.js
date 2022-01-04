import styles from './Coins.module.css'
import Link from 'next/link'

const Coins = ({ name, price, symbol, marketCap, volume, image, priceChange, id }) => {
    return (
        <Link href='coin/[id]' as={`/coin/${id}`}>
            {/* <a> */}
            <div className={styles.coin_container}>
                <div className={styles.coin_row}>
                    <div className={styles.coin}>
                        <img src={image} alt={name} className={styles.coin_img} />
                        <h1 className={styles.coin_name}>{name}</h1>
                        <p className={styles.coin_symbol}>{symbol}</p>
                    </div>
                    <div className={styles.coin_data}>
                        <p className={styles.coin_price}>${price}</p>
                        <p className={styles.coin_volume}>${volume.toLocaleString()}</p>
                        <p className={`coin_percent ${priceChange < 0 ? styles.red : styles.green}`}>{priceChange.toFixed(2)}%</p>
                        <p className={styles.coin_marketCap}>Mkt Cap: ${marketCap.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            {/* </a> */}
        </Link>
    )
}

export default Coins
