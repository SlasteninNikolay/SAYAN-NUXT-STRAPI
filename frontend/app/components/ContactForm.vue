<script setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

// Маска для телефона
const phoneMask = { mask: '+{7} (000) 000-00-00' }

const loading = ref(false)
const message = ref('')
const messageType = ref('')

// Схема валидации
const schema = yup.object({
  name: yup.string().required('Введите имя').min(2, 'Минимум 2 символа'),
  phone: yup.string().required('Введите телефон').min(11, 'Номер не полный')
})

const onSubmit = async (values, { resetForm }) => {
  loading.value = true
  message.value = ''
  try {
    message.value = 'Спасибо, ваша заявка отправлена!'
    messageType.value = 'success'
    resetForm()
  } catch (e) {
    message.value = 'Ошибка отправки. Попробуйте еще раз.'
    messageType.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit" class="contact-form">
    <div>
      <Field name="name" placeholder="Ваше имя" class="contact-form__field" />
      <ErrorMessage name="name" v-slot="{ message }">
        <span class="contact-form__message">{{ message }}</span>
      </ErrorMessage>
    </div>
    <div>
      <Field name="phone" v-slot="{ field, errorMessage }">
        <input
            v-imask="phoneMask"
            v-bind="field"
            placeholder="+7 (999) 123-45-67"
            class="contact-form__field"
        />
        <span class="contact-form__message">{{ errorMessage }}</span>
      </Field>
    </div>
    <button type="submit" :disabled="loading">
      {{ loading ? 'Отправка...' : 'Отправить' }}
    </button>
    <div v-if="message" :class="['contact-form__status', messageType]">
      {{ message }}
    </div>
  </Form>
</template>