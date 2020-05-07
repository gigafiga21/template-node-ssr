export default function canUseDOM() {
    return (process.env.BUILD_TARGET === 'client');
}