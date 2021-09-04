<script lang="ts">
    export let name: string;
    export let website: string;
    export let github: string;
</script>

<div>
    <!-- TODO: icons and GitHub star button -->
    <p>
        Build by <a href={website}>{name}</a>
    </p>
    <p>
        View source code on <a href={github}>GitHub</a>
    </p>
</div>

<style>
</style>
