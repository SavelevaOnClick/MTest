---
to: src/screens/Home/Home.tsx
unless_exists: true
---
import React from 'react'
import { useEffect, useState, useCallback, useMemo, useTranslation, useRoute } from '@hooks'
import { View, Text, Image, TouchableOpacity } from '@components'
import {navigate} from '@services';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles'
import { HomeRouteProp } from '@types';

const Home: React.FC = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch();
    // const data = useSelector(selectData);
	const {params} = useRoute<HomeRouteProp>();

	return (
	<View style={styles.container}>
		<Text>
			HomeScreen
		</Text>
	</View>
	)
}

export default Home;