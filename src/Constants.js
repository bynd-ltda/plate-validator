import { Platform } from 'react-native';

export const IMAGES = {
   eye : require('./../assets/eye.png'),
   check: require('./../assets/check-circle.png'),
   close: require('./../assets/close.png')
}

export const FONTS = {
    primary: Platform.OS === 'ios' ? 'OFFICINASERIFSTD-BOOK' : 'officinaserifstd_book',
    secondary: Platform.OS === 'ios' ? 'OFFICINASERIFSTD-BOOK' : 'officinaserifstd_bold',
    alternate: ''
}

export const KEYS = {
    launching: {
        errorMessage: 'Ocorreu um erro durante a inicialização do aplicativo.',
        buttonTitle: 'Tentar novamente',
    },
    login: {
        title: 'Entrar',
        firstInput: 'Email corporativo',
        secondInput: 'Senha',
        txtButton: 'Entrar',
        forgetPassword: 'Esqueceu a senha?'
    },
    valida: {
        title: 'Validar placa',
        txtButton: 'Validar',
    },
    check:{
        txtButtonValidaother: 'Validar outro carro',
        reportUser: 'Reportar usuario'
    },
    errors: {
        networkTitle: 'Sem conexão com a internet',
        networkMessage: 'Verifique sua conexão para continuar usando o App normalmente',
        message: 'Por favor, reveja os dados digitados e tente novamente.',

    },
    buttons: {
        edit: 'Editar',
        remove: 'Excluir',
        save: 'Salvar',
        ok: 'ok',
        cancel: 'Cancelar',
    },
}
