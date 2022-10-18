import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import Loading from './loading';
import Item from './item';

const listItem = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://picsum.photos/v2/list');
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <Item
      title={item.author}
      id={item.id}
      width={item.width}
      height={item.height}
      url={item.url}
      download_url={item.download_url}
    />
  );

  return (
    <View>
      {loading && <Loading />}
      {/* Main */}
      {!loading && <FlatList data={data} renderItem={renderItem} />}
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});
export default listItem;
