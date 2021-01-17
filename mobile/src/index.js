import React from 'react'

import { ActivityIndicator, SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native'

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.textUpper}> aHello World </Text>
                </View>
                <ActivityIndicator size="large" color="#111" />
            </SafeAreaView>

        </>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9151ac',
        flex: 1
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    textUpper: {
        color: '#fff',
        fontSize: 30
    }
})
