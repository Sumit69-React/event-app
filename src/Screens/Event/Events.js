import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import EventCard from '../../Components/EventCard';
import {useDispatch, useSelector} from 'react-redux';
import {getEvents, setFavouriteEvent} from '../../store/Event/action';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../Components/Header';

const Events = props => {
  const {navigation} = props;

  const {eventsData, favouriteEventsData} = useSelector(state => ({
    eventsData: state.eventsReducer.eventsData,
    favouriteEventsData: state.eventsReducer.favouriteEventsData,
  }));

  const [Events, setEvents] = useState([]);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      setEvents(eventsData);
    }, [eventsData]),
  );

  useEffect(() => {
    console.log('api callled');

    dispatch(getEvents());
  }, []);

  // Toggle function to change isFavorite value
  const toggleFavorite = event_id => {
    const updatedEvents = Events.map(event => {
      if (event.event_date_id === event_id.event_date_id) {
        return {...event, isFavorite: event.isFavorite === 0 ? 1 : 0};
      }
      return event;
    });
    setEvents(updatedEvents);
    let reqdata = {
      data: updatedEvents,
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
            <EventCard event={item} onToggleFavorite={toggleFavorite} />
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

export default Events;
