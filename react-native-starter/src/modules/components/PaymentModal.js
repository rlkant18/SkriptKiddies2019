import React, { Component } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Button, RadioGroup, Dropdown } from '../../components';
import { CreditCardInput } from "react-native-credit-card-input";

export default class FoodModal extends Component {
    // this.props.onCancel(false)
    constructor(props) {
        super(props)
        this.form = {}
    }

    onChange = (form) => {
        this.form = form
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
                <View style={{paddingTop: 150}}>
                    <CreditCardInput onChange={this.onChange}/>
                </View>
                <View style={{ paddingTop: 250, flexDirection: 'row'}}>
                    <Button
                        onPress={() => this.props.onCancel(false)}
                        style={styles.demoButton}
                        secondary
                        rounded
                        caption="Cancel" 
                    />

                    <Button
                        onPress={() => this.props.onSubmit(this.form)}
                        style={styles.demoButton}
                        secondary
                        rounded
                        caption="Submit" 
                    />
                </View>
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