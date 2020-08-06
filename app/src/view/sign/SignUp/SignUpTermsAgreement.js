import React, {useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { CheckBox } from 'react-native-elements';
import { COLORS } from '../../../assets/Colors';
import SignUpNextButton from '../components/SignUpNextButton';
import SignErrorMessageView from '../components/SignErrorMessageView';

// 컴포넌트를 생성 할 때는 constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.

// 컴포넌트를 제거 할 때는 componentWillUnmount 메소드만 실행됩니다.

// 컴포넌트의 prop이 변경될 때엔 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate 순으로 진행됩니다.

// 이 예제에는 없지만 state가 변경될 떄엔 props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작됩니다.

// @inject('signUpTermsAgreementStore')
// @observer

const SignUpTermsAgreement = (props) => {
  
  const signUpNextButtonClicked = () => {
    console.log("signUpNextButtonClicked clicked ")
    // props.signUpTermsAgreementStore.completeTermsAgreement();
  }
  useEffect(() => {  //userEffect : componentDidMount 와 componentDidUpdate 를 합친 형태
    console.log('SignUpTermsAgreement 호출');
    console.log(JSON.stringify(props))
    console.log('===============');
  }, []);


    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <View style={styles.logoContainer}>
              <Text style={styles.logo}>Grouping</Text>
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="이용약관, 개인정보 수집 및 이용, 프로모션 안내메일 수신(선택)에 모두 동의합니다."
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // onValueChange={setSelection}
                  // value={isSelected}
                  // checked={this.state.checked}
                />
              </View>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="그루핑 이용약관 동의 (필수)"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // checked={this.state.checked}
                />
                <Text style={styles.agreementDetail}>전문보기</Text>
              </View>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="개인정보 수집 및 이용에 대한 안내 (필수)"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // checked={this.state.checked}
                />
                <Text style={styles.agreementDetail}>전문보기</Text>
              </View>
              <View style={styles.agreementComponentContainer}>
                <CheckBox
                  containerStyle={styles.checkboxContainerStyle}
                  textStyle={styles.checkBoxTextStyle}
                  title="이벤트 등 프로모션 알림 메일 수신 (선택)"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  // onPress={()=> {}}
                  // checked={false}
                    value={false}
                  // checked={this.state.checked}
                />
              </View>
              <SignErrorMessageView 
                text={props.signUpTermsAgreementStore.errorMessage} 
                />
            </View>

            <View style={styles.bottomContainer}>
              <SignUpNextButton
                isActive={props.signUpTermsAgreementStore.isValidInputData}
                text="확 인"
                onPress={ () => signUpNextButtonClicked() }
              />
              
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  // }
}

export default inject('friendListStore', 'signUpTermsAgreementStore')(observer(SignUpTermsAgreement))

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inner: {
    flex: 1,
    backgroundColor: COLORS.MAIN_COLOR,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  logoContainer: {
    marginTop: 80,
    marginBottom: 70,
    backgroundColor: COLORS.MAIN_COLOR,
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontSize: 40,
    color: COLORS.SUB_COLOR,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
  },
  agreementComponentContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 2,
    marginBottom: 20,
  },
  checkboxContainerStyle: {
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  checkBoxTextStyle: {
    color: COLORS.FONT_GRAY,
    fontSize: 12,
  },
  agreementDetail: {
    fontSize: 10,
    color: COLORS.SUB_COLOR,
    borderBottomWidth: 1,
    borderColor: COLORS.SUB_COLOR,
    // alignSelf:'flex-end'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
    // marginBottom: 40,
    // borderWidth:2,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: COLORS.MAIN_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 30,
  },
});
