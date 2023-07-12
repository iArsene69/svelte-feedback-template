<script lang="ts">
  import { FeedbackStorage } from "../storage";
  import { v4 as uuidv4 } from "uuid";

  let feedbackArray: { id: number; rating: number; review: string }[];

  FeedbackStorage.subscribe((feedback) => {
    feedbackArray = feedback;
  });

  let rates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let rating = 10;
  let review = "";
  let message = "";
  let btnDisabled = true;

  const handleChange = (rate: number) => {
    rating = rate;
  };

  const handleInput = () => {
    if (review.trim().length <= 10) {
      message = "Text must be at least 10 characters long";
      btnDisabled = true;
    } else {
      message = "";
      btnDisabled = false;
    }
  };

  const handleSubmit = () => {
    if (review.trim().length > 10) {
      const newFeedback = {
        id: parseInt(uuidv4()),
        review,
        rating,
      };
      FeedbackStorage.update((feedback) => {
        return [...feedback, newFeedback];
      });

      review = "";
      rating = 10;
    }
  };
</script>

<div
  class="font-merriweather px-3 py-3 bg-white border my-2 rounded-lg relative"
>
  <header>
    <h1 class="text-center font-bold text-xl">How would you rate svelte?</h1>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <ul class="flex justify-around items-center my-7">
      {#each rates as rate}
        <li
          class={`relative ${
            rating === rate
              ? "bg-[#ff3e00] text-white"
              : "bg-[#f4f4f4] text-black"
          } w-9 h-9 text-center rounded-full text-base border transition cursor-pointer font-semibold`}
        >
          <input
            class="opacity-0 absolute inset-0"
            type="radio"
            name="rating"
            id={`num${rate}`}
            value={rate}
            on:change={(e) => handleChange(parseInt(e.currentTarget.value))}
          />
          <label
            for={`num${rate}`}
            class="absolute top-1/2 left-1/2 w-10 h-10 px-2 py-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            >{rate}</label
          >
        </li>
      {/each}
    </ul>
    <div
      class="flex justify-between border border-[#ccc] py-2 px-3 rounded-lg mt-4"
    >
      <input
        class="focus:outline-none flex-grow text-base"
        type="text"
        bind:value={review}
        on:input={handleInput}
        placeholder="Tell us something about svelte"
      />
      <button
        type="submit"
        disabled={btnDisabled}
        class="text-white border-0 rounded-lg w-24 h-10 cursor-pointer bg-[#ff3e00] disabled:bg-[#a2320d] disabled:hover:scale-100 disabled:hover:opacity-100"
      >
        Submit
      </button>
    </div>
    {#if message}
      <div class="pt-3 text-center text-red-600">
        {message}
      </div>
    {/if}
  </form>
</div>
