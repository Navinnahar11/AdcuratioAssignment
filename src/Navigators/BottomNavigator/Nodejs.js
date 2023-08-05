import React, { useState, useEffect } from 'react';
import { View, Text, Linking, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { allreactquestion } from './AllquestionData';
import { Card } from 'react-native-paper'

const Nodejs = () => {
  const Item = ({ title, url }) => (
    <Card >
      <TouchableOpacity
        onPress={() => { Linking.openURL(url) }}
      >
        <View style={styles.titleView}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
  return (
    <View>
      <FlatList
       showsVerticalScrollIndicator={false}
        data={allreactquestion}
        renderItem={({ item }) => <Item title={item.title} url={item.url} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    margin: 10,
  },
  title: { color: '#366FB3', marginVertical: 10 }
})

export default Nodejs