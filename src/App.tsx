import React from 'react'
import { Navigation } from './navigation'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { createModalStack, ModalProvider } from 'react-native-modalfy'
import Dialog from './components/Dialog'
import { SafeAreaView } from 'react-native'

const modalConfig = { Dialog }
const defaultOptions = { backdropOpacity: 0.6 }

const stack = createModalStack(modalConfig, defaultOptions)

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ModalProvider stack={stack}>
					<Navigation />
				</ModalProvider>
			</PersistGate>
		</Provider>
	)
}

export default App
