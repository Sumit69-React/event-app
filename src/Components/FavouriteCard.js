import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouriteCard = ({event, onToggleFavorite}) => {
  const openLink = url => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.card} key={event.event_date_id}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: event.event_profile_img}} // Replace with your image URL
          style={styles.image}
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{event.event_name}</Text>
          <MaterialCommunityIcons
            onPress={() => openLink(event.event_url)}
            name={'arrow-right'}
            color={'black'}
            size={20}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.date}>
            {event.readable_from_date} | 19:00 - 01:00
          </Text>
          <Text style={styles.location}>
            {event.city}, {event.country}
          </Text>
        </View>
        <Text style={styles.price}>€7</Text>
        <View style={styles.titleContainer}>
          <View style={styles.tagsContainer}>
            {event.danceStyles.map((i, k) => (
              <TouchableOpacity style={styles.tag} key={k}>
                <Text style={styles.tagText}>{i.ds_name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.shareContainer}>
            <MaterialCommunityIcons
              name={'export-variant'}
              color={'black'}
              size={20}
            />
            {event.isFavorite == 1 ? (
              <MaterialCommunityIcons
                name={'heart'}
                color={'#21D393'}
                size={20}
                onPress={() => onToggleFavorite(event)}
              />
            ) : (
              <MaterialCommunityIcons
                name={'heart-outline'}
                color={'black'}
                size={20}
                onPress={() => onToggleFavorite(event)}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    elevation: 3,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shareContainer: {
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  date: {
    color: '#34A853',
    fontSize: 12,
    marginVertical: 2,
  },
  location: {
    color: '#888',
    fontSize: 12,
    marginVertical: 2,
  },
  price: {
    color: '#000',
    fontSize: 14,
    marginVertical: 2,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 8,
    marginRight: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#000',
  },
  favoriteButton: {
    padding: 10,
  },
});

export default FavouriteCard;
