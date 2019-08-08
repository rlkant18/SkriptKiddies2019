import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Button, RadioGroup, Dropdown } from '../../components';
import { CreditCardInput } from "react-native-credit-card-input";

export default class FoodModal extends Component {
    // this.props.onCancel(false)
    constructor(props) {
        super(props)
    }

    render() {
        const {
            container,
        } = styles

        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={true}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                < CreditCardInput />
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6CC4EE',
        borderRadius: 10
    },
    demoButton: {
        flex: 1,
        margin: 2,
    },
});