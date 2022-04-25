import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image,ScrollView,TouchableOpacity, Text, View,ImageBackground } from 'react-native';
import { Ionicons,AntDesign,Entypo,FontAwesome5,MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return ( 
    <>
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.SecoContainer}>
      <View style={styles.HomeAndSearch}>
         <TouchableOpacity> 
           <Text style={{fontSize:20, margin:10, color:'white'}}>Home</Text>
         </TouchableOpacity>
      < Image
      source={require("./assets/limkokwing.jpg")}
      style={{height:'40%', width:'65%', flexDirection:'row', marginTop:'10%',borderRadius: 3}}>
      </Image>
       <TouchableOpacity>
       <Ionicons name="search" size={24} color="white" style={{margin:10}} />
        </TouchableOpacity> 
      </View>
    <View style={styles.ThirdContainer}>
    <View style={[styles.OngingCourses, styles.elvation]}>
        <ImageBackground source={require("./assets/VC.webp")}
        style={{height:'97%',width:'100%', marginTop:2, }}>
         <Text style={{color:'white',fontWeight:'bold',fontSize:15, marginStart:100,marginTop:2}}>COURSE OF STUDY :</Text>
         <Text style={{color:'white',fontWeight:'bold',fontSize:20, marginStart:135,}}>BSc in </Text>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15, marginStart:8}}>SOFTWARE ENIGNEERING WITH MULTIMEDIA </Text>
          <Text style={{color:'white', marginStart:8}}>Software engineering is a process of analyzing user requirements and then designing, building, and testing software application </Text>
        </ImageBackground>
      </View>
    < View style={styles.ModulesANDseeAll}>
    <Text style={{fontSize:18, marginStart:4,marginTop:2}}>Modules             </Text>
     <TouchableOpacity>
   <Text style={{fontSize:18,marginStart:'60.5%',marginTop:2}}>See All</Text> 
   </TouchableOpacity>
   </View>
      <ScrollView>
        <View style={styles.box}>
      <View style={styles.CourseDetails}>
        <View style={[styles.MobileP, styles.elvation]}>
          <ImageBackground source={require("./assets/APPM.jpg")}
          style={{height:'99%',width:'99%',marginTop:2,marginStart:3}}>
          <Text style={{marginStart:3,color:'white',fontWeight:'bold'}}>Mobile Device Programming </Text>
          <View style={styles.LuctureProfile}>
            <Image
            source={require("./assets/Profile1.jpg")}
            style={{height:40, width:40,borderRadius:40/2, margin:3}}>
           </Image>
           <View style={styles.names}>
             <Text style={{fontWeight:'bold',color:'white', marginStart:3,marginTop:3}}>Lucture:</Text>
             <Text style={{marginStart:3,color:'white',fontSize:12}}>Mr Nkhatho</Text>
           </View>
           <TouchableOpacity>
           <Ionicons name="notifications" size={24} color="white" style={{marginStart:180}} />
           </TouchableOpacity>
         </View>
           <View style={styles.moduleDetails}>
             <TouchableOpacity>
             <View style={styles.chaptersContainer}>
             <View style={[styles.chapters,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}}>55</Text>
             </View>
             <Text style={{marginStart:48, color:'white'}}>chapters</Text>
             </View>
             </TouchableOpacity>
             <TouchableOpacity>
             <View style={styles.StudentsContainer}>
             <View style={[styles.Students,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >300</Text>
             </View>
             <Text style={{marginStart:48,color:'white'}}>Students</Text>
             </View>
             </TouchableOpacity>
             <View style={styles.RatingsContainer}>
             < View style={[styles.Rating,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >9/10</Text>
             </View>
             <Text style={{marginStart:53,color:'white'}}>Rating</Text>
             </View>
           </View>
           </ImageBackground>
        </View>
      </View>
        
      <View style={styles.CourseDetails}>
        <View style={[styles.Mobile, styles.elvation]}>
          <ImageBackground source={require("./assets/CPP.jpg")}
          style={{height:'99%',width:'99%',marginTop:2,marginStart:3}}>
          <Text style={{marginStart:3,color:'white',fontWeight:'bold'}}>C++ Programming </Text>
          <View style={styles.LuctureProfile}>
            <Image
            source={require("./assets/Software.jpg")}
            style={{height:40, width:40,borderRadius:40/2, margin:3}}>
           </Image>
           <View style={styles.names}>
             <Text style={{fontWeight:'bold',color:'white', marginStart:3,marginTop:3}}>Lucture:</Text>
             <Text style={{marginStart:3,color:'white',fontSize:12}}>Mr Bhila</Text>
           </View>
           <TouchableOpacity>
           <Ionicons name="notifications" size={24} color="white" style={{marginStart:180}} />
           </TouchableOpacity>
         </View>
           <View style={styles.moduleDetails}>
             <TouchableOpacity>
             <View style={styles.chaptersContainer}>
             <View style={[styles.chapters,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}}>155</Text>
             </View>
             <Text style={{marginStart:48, color:'white'}}>chapters</Text>
             </View>
             </TouchableOpacity>
             <TouchableOpacity>
             <View style={styles.StudentsContainer}>
             <View style={[styles.Students,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >255</Text>
             </View>
             <Text style={{marginStart:48,color:'white'}}>Students</Text>
             </View>
             </TouchableOpacity>
             <View style={styles.RatingsContainer}>
             < View style={[styles.Rating,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >8/10</Text>
             </View>
             <Text style={{marginStart:53,color:'white'}}>Rating</Text>
             </View>
           </View>
           </ImageBackground>
        </View>

        <View style={[styles.MobileD, styles.elvation]}>
          <ImageBackground source={require("./assets/JAVA.jpeg")}
          style={{height:'99%',width:'99%',marginTop:2,marginStart:3}}>
          <Text style={{marginStart:3,color:'white',fontWeight:'bold'}}>Java Programming </Text>
          <View style={styles.LuctureProfile}>
            <Image
            source={require("./assets/mrme.jpg")}
            style={{height:40, width:40,borderRadius:40/2, margin:3}}>
           </Image>
           <View style={styles.names}>
             <Text style={{fontWeight:'bold',color:'white', marginStart:3,marginTop:3}}>Lucture:</Text>
             <Text style={{marginStart:3,color:'white',fontSize:12}}>Mr Liphoto</Text>
           </View>
           <TouchableOpacity>
           <Ionicons name="notifications" size={24} color="white" style={{marginStart:180}} />
           </TouchableOpacity>
         </View>
           <View style={styles.moduleDetails}>
             <TouchableOpacity>
             <View style={styles.chaptersContainer}>
             <View style={[styles.chapters,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}}>160</Text>
             </View>
             <Text style={{marginStart:48, color:'white'}}>chapters</Text>
             </View>
             </TouchableOpacity>
             <TouchableOpacity>
             <View style={styles.StudentsContainer}>
             <View style={[styles.Students,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >305</Text>
             </View>
             <Text style={{marginStart:48,color:'white'}}>Students</Text>
             </View>
             </TouchableOpacity>
             <View style={styles.RatingsContainer}>
             < View style={[styles.Rating,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >9/10</Text>
             </View>
             <Text style={{marginStart:53,color:'white'}}>Rating</Text>
             </View>
           </View>
           </ImageBackground>
        </View>
        
         
        <View style={[styles.MobileS, styles.elvation]}>
          <ImageBackground source={require("./assets/MBD.jpg")}
          style={{height:'99%',width:'99%',marginTop:2,marginStart:3}}>
          <Text style={{marginStart:3,color:'white',fontWeight:'bold'}}>Software Modeling and Analysis </Text>
          <View style={styles.LuctureProfile}>
            <Image
            source={require("./assets/APPD.jpg")}
            style={{height:40, width:40,borderRadius:40/2, margin:3}}>
           </Image>
           <View style={styles.names}>
             <Text style={{fontWeight:'bold',color:'white', marginStart:3,marginTop:3}}>Lucture:</Text>
             <Text style={{marginStart:3,color:'white',fontSize:12}}>Mr Makheka</Text>
           </View>
           <TouchableOpacity>
           <Ionicons name="notifications" size={24} color="white" style={{marginStart:180}} />
           </TouchableOpacity>
         </View>
           <View style={styles.moduleDetails}>
             <TouchableOpacity>
             <View style={styles.chaptersContainer}>
             <View style={[styles.chapters,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}}>60</Text>
             </View>
             <Text style={{marginStart:48, color:'white'}}>chapters</Text>
             </View>
             </TouchableOpacity>
             <TouchableOpacity>
             <View style={styles.StudentsContainer}>
             <View style={[styles.Students,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >300</Text>
             </View>
             <Text style={{marginStart:48,color:'white'}}>Students</Text>
             </View>
             </TouchableOpacity>
             <View style={styles.RatingsContainer}>
             < View style={[styles.Rating,styles.elvation]}>
               <Text style={{color:'white',fontSize:17}} >8/10</Text>
             </View>
             <Text style={{marginStart:53,color:'white'}}>Rating</Text>
             </View>
           </View>
           </ImageBackground>
        </View>


      </View>
      </View>
      </ScrollView>
      
    </View>
      <View style={styles.AppBars}>
        <TouchableOpacity>
          <View style={styles.homess}>
      <Entypo name="home" size={30} color="white" />
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <FontAwesome5 name="chalkboard-teacher" size={24} color="white" style={{marginTop:6, marginStart:40}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <MaterialIcons name="add-circle-outline" size={35} color="white" style={{marginTop:1, marginStart:40}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="star" size={30} color="white" style={{marginTop:4, marginStart:40}} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
            source={require("./assets/dp.jpg")}
            style={{height:30, width:30,borderRadius:30/2,marginTop:5, marginStart:40}}>
           </Image>
           </TouchableOpacity>
      </View>
      </View>
   </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SecoContainer: {
    marginTop:38,
    height: '95.8%',
    width:'100%',
    backgroundColor: 'blue',
  },
  HomeAndSearch: {
    backgroundColor: 'black',
    flexDirection: 'row',
    height:'19%',
  }, 
  ThirdContainer: {
    height: '75.5%',
    width:'100%',
    backgroundColor: 'rgb(238, 238, 238)',
  },
  OngingCourses: {
    marginTop:5,
    flexDirection: 'row',
    backgroundColor:'white',
    height: '25%',
    width:'98%',
    marginStart:3,
  },
  ModulesANDseeAll: {
    flexDirection:'row',
  },
  MobileP:{
    marginStart:3,
    marginTop:5,
    height: 160,
    width:'98%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LuctureProfile:{
    flexDirection: 'row',
   },
   moduleDetails:{
    flexDirection:'row', 
   
   },
   chapters:{
     height:50,
     width:50,
     borderRadius: 50,
     backgroundColor:'rgb(26, 35, 126)',
     marginTop:16,
     marginStart:48,
     alignItems: 'center',
     justifyContent: 'center',
   },
   Students:{
     height:50,
     width:50,
     borderRadius: 50,
     backgroundColor:'rgb(26, 35, 126)',
     marginTop:16,
     marginStart:48,
     alignItems: 'center',
     justifyContent: 'center',
   },
   Rating:{
     height:50,
     width:50,
     borderRadius: 50,
     backgroundColor:'rgb(26, 35, 126)',
     marginTop:16,
     marginStart:48,
     alignItems: 'center',
     justifyContent: 'center',
   },
   Mobile:{
    marginTop:14,
    marginStart:6,
    height: 160,
    width:'96.5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MobileD:{
    marginTop:14,
    marginStart:4,
    height: 160,
    width:'96.5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MobileS:{
    marginTop:14,
    height: 165,
    marginStart:6,
    width:'96.5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homess:{
    backgroundColor:'rgb(26, 35, 126)',
    height:33,
    width:33,
    marginTop:3.5,
    marginStart:12,
    borderRadius:4,
    alignItems: 'center',
    justifyContent: 'center',
  },

 elvation:{
    elevation:5,
    shadowColor:'#000000',
  },
  box:{

  },
  AppBars:{
    flexDirection:'row',
    height:'5%',
    backgroundColor:'black',
  }
 });
