import React  from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import {useState} from 'react'
import styles from './welcome.style'
import {icons,SIZES} from '../../../constants'

const jobTypes = ['FullTime' , 'Part-Time' , 'Contractor'];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType , setActiveJobType] = useState('FullTime')
  return (
    <View>
     <View style={styles.container} >
       <Text style={styles.userName} >Hello Larry</Text>
       <Text style={styles.welcomeMessage} >Find Your Perfect Job</Text>
     </View>

     <View style={styles.searchContainer} >
      <View style={styles.searchWrapper} >
        
        <TextInput
           style={styles.searchInput}  
           value=""
           onChange={()=> {}}
           placeholder='What are you looking for ?'
           />
        </View>
       
        
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
       </View>

    <View style={styles.tabsContainer}>
      <FlatList 
        
         data={jobTypes} 
         renderItem={({item}) => (
          <TouchableOpacity style={styles.tab(activeJobType, item)}  onPress={() => {
            setActiveJobType(item)
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
         ) } 
         keyExtractor={item => item}
         contentContainerStyle={{columnGap:SIZES.small}}
         horizontal //find why list wont scroll horozonalyy
         
         />
    </View>
     

    </View>
  )
}

export default Welcome