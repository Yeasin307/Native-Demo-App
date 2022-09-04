import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../context/AuthContext';

const HomeScreen = () => {
    const { isLoading, logout } = useContext(AuthContext);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("https://api.shazlanihtisham.com/api/v1/projects")
            .then(data => setProjects(data))
    }, [])

    return (
        <View style={styles.container}>
            <Spinner visible={isLoading} />
            <Text style={styles.welcome}>Welcome to Homepage</Text>
            <Button title="Logout" color="red" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 18,
        marginBottom: 8,
    },
});

export default HomeScreen;