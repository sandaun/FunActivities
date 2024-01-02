import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getRandomActivity} from '../api/boredAPI';
import ActivityCard from '../components/ActivityCard';
import {Picker} from '@react-native-picker/picker';
import FilterLogo from '../assets/filter.svg';
import {Activity} from '../types/activityTypes';

const HomeScreen = () => {
  const [activity, setActivity] = useState<Activity | undefined>();
  const [selectedType, setSelectedType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const activityType = useRef('random');

  useEffect(() => {
    fetchActivity();
  }, []);

  const fetchActivity = async () => {
    const data = await getRandomActivity(activityType.current);
    setActivity(data);
  };

  const handleDonePress = () => {
    activityType.current = selectedType;
    setModalVisible(false);
    fetchActivity();
  };

  const activityTypes = [
    'random',
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork',
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonFilter}
        onPress={() => setModalVisible(true)}>
        <View style={{}}>
          <FilterLogo width={20} height={20} />
        </View>
        <Text style={styles.buttonFilterText}>
          Activity Type:{' '}
          <Text style={styles.typeText}>
            {activityType.current.charAt(0).toUpperCase() +
              activityType.current.slice(1)}
          </Text>
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainerStyle}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Select an Activity Type:</Text>
            <Picker
              selectedValue={selectedType}
              onValueChange={itemValue => setSelectedType(itemValue)}>
              {activityTypes.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.charAt(0).toUpperCase() + item.slice(1)}
                  value={item}
                />
              ))}
            </Picker>
            <Button title="Done" onPress={handleDonePress} />
          </View>
        </View>
      </Modal>

      {activity && <ActivityCard activity={activity} />}
      <TouchableOpacity style={styles.buttonActivity} onPress={fetchActivity}>
        <Text style={styles.buttonActivityText}>Get New Activity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonFilter: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    alignItems: 'center',
  },
  buttonActivity: {
    backgroundColor: 'lightgreen',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFilterText: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  buttonActivityText: {
    color: 'black',
    fontSize: 16,
  },
  typeText: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  // errorText: {
  //   color: 'red',
  //   textAlign: 'center',
  //   marginVertical: 10,
  // },
  // loading: {
  //   fontSize: 16,
  //   textAlign: 'center',
  // },
});

export default HomeScreen;
