import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import EventCard from '../../Components/EventCard';
import {useDispatch, useSelector} from 'react-redux';
import {getEvents, setFavouriteEvent} from '../../store/Event/action';
import FavouriteCard from '../../Components/FavouriteCard';
import Header from '../../Components/Header';
import {useFocusEffect} from '@react-navigation/native';

const Favorite = props => {
  const {navigation} = props;

  const {favouriteEventsData, eventsData} = useSelector(state => ({
    favouriteEventsData: state.eventsReducer.favouriteEventsData,
    eventsData: state.eventsReducer.eventsData,
  }));

  const [Events, setEvents] = useState([]);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      setEvents(eventsData);
      const filteredFavorites = eventsData.filter(
        event => event.isFavorite === 1,
      );
      setEvents(filteredFavorites);
    }, [eventsData]),
  );

  const toggleFavorite = event_id => {
    const updatedEvents = Events.map(event => {
      if (event.event_date_id === event_id.event_date_id) {
        return {...event, isFavorite: event.isFavorite === 0 ? 1 : 0};
      }
      return event;
    });
    const updatedEvents2 = eventsData.map(event => {
      if (event.event_date_id === event_id.event_date_id) {
        return {...event, isFavorite: event.isFavorite === 0 ? 1 : 0};
      }
      return event;
    });
    setEvents(updatedEvents);
    let reqdata = {
      data: updatedEvents2,
    };
    dispatch(setFavouriteEvent(reqdata));
  };

  return (
    <>
      <Header />

      <ScrollView>
        <FlatList
          data={Events}
          renderItem={({item}) => (
            <FavouriteCard event={item} onToggleFavorite={toggleFavorite} />
          )}
          keyExtractor={item => item.event_date_id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
});

export default Favorite;
