import { useState } from 'react';
import CoinList from '../components/CoinList'
import SearchBar from '../components/SearchBar'
import Layout from '../components/Layout'

export default function Home({ coinData }) {
  const [search, setSearch] = useState('');
  const searchCoins = coinData.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  }

  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search Currency" onChange={handleSearch} />
        <CoinList coinData={searchCoins} />
      </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const coinData = await res.json()
  return {
    props: {
      coinData
    }
  };
};