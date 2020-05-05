import React, { useEffect } from 'react';
import { View, TouchableWithoutFeedback, ViewProps, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props extends ViewProps {
    children: React.ReactNode,
    cancelable: boolean,
    opacity: number
}

const modal = (props: Props): React.ReactElement => {

    const navigation = useNavigation();
    useEffect(() => {

        interface progress {
            current: { progress: { interpolate: (obj: object) => void } }
            interpolate: object
        }

        let modalObtions = {
            cardStyle: { backgroundColor: 'transparent' },
            cardOverlayEnabled: true,
            headerShown: false,
            cardStyleInterpolator: ({ current: { progress } }: progress) => ({

                cardStyle: {
                    
                    opacity: progress.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: [0, 0.25, 0.7, 1],
                    }),
                    transform: [
                        {
                            scale: progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1],
                                extrapolate: 'clamp',
                            }),
                        },
                    ],
                },
                overlayStyle: {
                    opacity: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, props.opacity],
                        extrapolate: 'clamp',
                    }),
                },
            }),
        }

        navigation.setOptions(modalObtions);
    }, [])

    return (
        <TouchableWithoutFeedback onPress={() => props.cancelable ? navigation.goBack() : false}>
            <View style={styles.container}>
                <TouchableWithoutFeedback>
                    <View onStartShouldSetResponder={() => true} style={[styles.content, props.style]}>
                        {props.children}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    );
}

modal.defaultProps = {
    cancelable: true,
    opacity: 0.7
}

export default modal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    content: {
        top: '15%',
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 20
    }
})
