import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from '../Button'
import { useFormikContext } from 'formik'

export default function SubmitButton({ title }) {
	const { handleSubmit } = useFormikContext()
	return <Button title={title} onPress={handleSubmit} />
}

const styles = StyleSheet.create({})