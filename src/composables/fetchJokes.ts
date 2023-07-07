import { Ref, ref } from "vue";
import axios from 'axios'

export default function useFetchJokes() {
  const isLoading: Ref<boolean> = ref(false);
  const jokeText: Ref<string> = ref('No Jokes as of now');

  async function fetchNewJokes() {
    isLoading.value = true;
    try {
      const { data } = await axios.get('https://official-joke-api.appspot.com/random_joke');
      jokeText.value = data.setup
    } catch (e) {
      jokeText.value = "Something went wrong!!!";
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    jokeText,
    fetchNewJokes
  }
}
