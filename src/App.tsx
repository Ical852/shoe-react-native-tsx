/* eslint-disable react/no-unstable-nested-components */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {MenuItemModel, ProductModel, ServiceResponse} from './Models';

import {customColors, customFonts, numformat} from './utils';

import {
  IconPlus,
  IconQr,
  IconSearch,
  Shoe1,
  Shoe2,
  Shoe3,
  Shoe4,
} from './assets';

import {
  BestSellerCard,
  Gap,
  MenuBar,
  SuperRareCard,
  TitleDesc,
} from './components';
import axios from 'axios';

const App = () => {
  const [data, setData]: [Array<ProductModel>, Function] = useState([]);
  const getData = async () => {
    axios.get('http://192.168.100.17:8000/api/products/cat/1').then(res => {
      const response: ServiceResponse = res.data;
      setData(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const menuItems: Array<MenuItemModel> = [
    {
      id: 1,
      icon: 'home',
      title: 'Home',
      active: true,
    },
    {
      id: 2,
      icon: 'explore',
      title: 'Explore',
      active: false,
    },
    {
      id: 3,
      icon: 'wish',
      title: 'Wish',
      active: false,
    },
    {
      id: 4,
      icon: 'profile',
      title: 'Profile',
      active: false,
    },
  ];

  const Header = (): JSX.Element => {
    return (
      <View style={styles.header}>
        <HeadProfile />
        <HeadSearchBar />
      </View>
    );
  };

  const HeadProfile = (): JSX.Element => {
    return (
      <View style={styles.profHead}>
        <Text style={styles.proftext}>Hello, Shalahuddin</Text>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D5603AQG8TnZ0oQ1E_A/profile-displayphoto-shrink_800_800/0/1671005717839?e=2147483647&v=beta&t=jFOOZ9g0fZGBzxaAicpzK8cZDdH7oGOhW0AuTkt7Wlw',
          }}
          style={styles.profimg}
        />
      </View>
    );
  };

  const HeadSearchBar = (): JSX.Element => {
    return (
      <View style={styles.searchHead}>
        <IconSearch />
        <Text style={styles.searchheadtext}>Search your shoes here...</Text>
      </View>
    );
  };

  const HeaderTopUp = (): JSX.Element => {
    return (
      <View style={styles.topUpHead}>
        <IconQr />
        <View style={styles.line} />
        <View style={styles.balancebox}>
          <Text style={styles.balance}>{numformat(150000)}</Text>
          <Text style={styles.balancedesc}>Your SsmPay Right Now</Text>
        </View>
        <TouchableOpacity style={styles.topupBtn}>
          <IconPlus />
        </TouchableOpacity>
      </View>
    );
  };

  const BestSellerSection = (): JSX.Element => {
    return (
      <View style={styles.bssection}>
        <TitleDesc
          title={'Best Seller Shoes'}
          desc={'Get best seller shoes right now !'}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Gap width={24} height={0} />
          {data.map((product: ProductModel) => {
            return <BestSellerCard key={product.id} product={product} />;
          })}
        </ScrollView>
      </View>
    );
  };

  const SuperRareSection = (): JSX.Element => {
    return (
      <View>
        <TitleDesc
          title={'Super Rare Shoes'}
          desc={'Get super rare shoes now before it’s too late !'}
        />
        <View style={styles.srscontent}>
          <SuperRareCard
            img={Shoe1}
            title={'Don Issue 2 Shoes'}
            price={670000}
            cat={'Hiking'}
          />
          <SuperRareCard
            img={Shoe2}
            title={'Harden Vol 4 Shoes'}
            price={720000}
            cat={'Training'}
          />
        </View>
        <View style={styles.srscontent}>
          <SuperRareCard
            img={Shoe3}
            title={'Pro Boost Low Shoes'}
            price={720000}
            cat={'Training'}
          />
          <SuperRareCard
            img={Shoe4}
            title={'Dame 7 Shoes'}
            price={720000}
            cat={'Hiking'}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <ScrollView
        style={styles.maincontent}
        showsVerticalScrollIndicator={false}>
        <Header />
        <HeaderTopUp />
        <BestSellerSection />
        <SuperRareSection />
        <Gap width={0} height={70} />
      </ScrollView>
      <MenuBar icons={menuItems} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  maincontent: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: customColors.orange,
    height: 209,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  profHead: {
    marginTop: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  proftext: {
    color: customColors.white,
    width: 157,
    fontSize: 24,
    fontFamily: customFonts.semiBold,
  },
  profimg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: customColors.white,
  },
  searchHead: {
    height: 40,
    backgroundColor: customColors.white,
    marginHorizontal: 24,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  searchheadtext: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: customFonts.regular,
    color: customColors.grey,
  },
  topUpHead: {
    marginTop: -34,
    height: 60,
    backgroundColor: customColors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    paddingLeft: 18,
    paddingRight: 24,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  line: {
    height: 34,
    width: 1,
    backgroundColor: customColors.grey,
    marginHorizontal: 18,
  },
  balance: {
    fontSize: 14,
    fontFamily: customFonts.semiBold,
    color: customColors.orange,
  },
  balancedesc: {
    fontSize: 10,
    fontFamily: customFonts.regular,
    color: customColors.grey,
  },
  balancebox: {
    flex: 1,
  },
  topupBtn: {
    height: 24,
    width: 24,
    borderRadius: 4,
    backgroundColor: customColors.orange2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bssection: {
    marginTop: 20,
  },
  srscontent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 17,
    paddingTop: 16,
  },
});
