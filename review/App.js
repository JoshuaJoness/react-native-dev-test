import React from 'react';
import { Text, View, ScrollView ,TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

const data = [
  { name: 'Gort', year: 1951,img:'https://upload.wikimedia.org/wikipedia/en/0/03/Gort_Firing.jpg' },
  { name: 'Ash', year: 1979,img: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Ash_%28Alien%29.jpg'},
  {name: 'T-800',year: 1984,img: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Terminator-2-judgement-day.jpg'},
  {name: 'Bishop', year: 1986,img:'https://upload.wikimedia.org/wikipedia/en/4/49/Bishop_%28Alien%29.png'},
  {name: 'Johnny 5',year: 1986,img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Johnny5_03.jpg/433px-Johnny5_03.jpg'},
  { name: 'Data', year: 1987,img:'https://upload.wikimedia.org/wikipedia/en/0/09/DataTNG.jpg' },
  { name: 'Bender', year: 1999 , img: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png'},
  { name: 'Marvin', year: 2005 ,img: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Marvin_%28HHGG%29.jpg'},
  { name: 'Astro Boy', year: 2009, img: 'https://upload.wikimedia.org/wikipedia/en/f/f7/AstroBoy%28CGI%29.jpg' },
  { name: 'TARS', year: 2014, img: 'https://compote.slate.com/images/17c75261-6622-4399-a0ae-6316eeff6319.jpg' },
  { name: 'CHAPPiE', year: 2015, img: 'https://upload.wikimedia.org/wikipedia/en/7/71/Chappie_poster.jpg' },
  { name: 'Poe', year: 2018, img: 'https://vignette.wikia.nocookie.net/altered-carbon/images/7/71/Poe.jpg/revision/latest/scale-to-width-down/325?cb=20180205161632' }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robot: null
    };
  }

  clickRobot = (robot) => {
    this.setState({robot});
  };

  viewRobo = (robot) => {
    robots.find(theRobot => robot.name == theRobot.name)
  }

  render() {
    let years = [];
    let robots = [];
    let theRobot = this.state.robot;

    data.forEach((robot, index) => {
      robots[index] = <View key={index} style={styles.robotListing}>
        <TouchableOpacity onPress={() => {this.clickRobot(robot);}}>
          <Text style={styles.robotTitleButton}>{robot.name}</Text>
        </TouchableOpacity>
        <Text>{robot.year}</Text>
      </View>
    })


    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={theRobot != null}
          onRequestClose={() => {this.setState({robot: null})
          }}
        >
          <ScrollView>
            {
            theRobot &&
            <View style={styles.robotCardContainer}>
              <Text style={styles.robotCardTitle}>{theRobot.name}</Text>
              <Image
                source={{uri: theRobot.img}}
                style={styles.robotCardImage}
              />
              <TouchableOpacity
                onPress={() => this.setState({robot: null})}
                style={styles.backButton}
              >
                <AntDesign
                  name='back'
                  size={30}
                  color={'salmon'}
                />
                <Text style={styles.backButtonText}>Go Back</Text>
              </TouchableOpacity>
            </View>
            }
          </ScrollView>
        </Modal>
        <View style={styles.listContainer}>
          <View
            style={ Platform.OS == 'android' ? styles.androidNavStyles : styles.iosNavStyles }>
          </View>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.viewContainer}>
              {robots}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  robotListing: {
    flexDirection: 'column',
    padding: 20,
    borderBottomWidth:1,
    borderBottomColor: '#ddd'
  },
  robotTitleButton: {
    fontSize: 18,
    paddingBottom: 5
  },
  robotCardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 40,
    height:900
  },
  robotCardTitle: {
    fontSize: 36,
    paddingBottom: 5
  },
  robotCardImage: {
    width: 340,
    height: 480,
    alignSelf:'center'
  },
  backButton: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    paddingTop:30
  },
  backButtonText: {
    fontSize:18,
    marginLeft:15
  },
  listContainer: {
    flexDirection: 'column'
  },
  androidNavStyles: {
    flexGrow: 0,
    flexShrink: 0,
    height: 24,
    backgroundColor: '#a85'
  },
  iosNavStyles: {
    flexGrow: 0,
    flexShrink: 0,
    height: 50,
    backgroundColor: '#a85'
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingBottom:120
  }
})
