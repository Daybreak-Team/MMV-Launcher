// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49520000)) {
            $InitializeCommonEvent(0, 90055000, 49525200, 1, 49522200, 49520201);
            $InitializeCommonEvent(0, 90055001, 49525200, 1, 49520201, 49520200);
        }
        if (EventFlag(49520001)) {
            $InitializeCommonEvent(0, 90055000, 49525200, 2, 49522200, 49520201);
            $InitializeCommonEvent(0, 90055001, 49525200, 2, 49520201, 49520200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49520200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49522200, 49520200);
    }
    $InitializeCommonEvent(0, 90065910, 49520200, 49520205, 49520800, 920310, 690047, 49525210, 49520800, 905860000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49520200, 49520800, 920310, 49525210, 49520800, 905860000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49520800, 1, 0, 0, 1050, 920310, 905860000, 49520800);
    }
    $InitializeCommonEvent(0, 90015012, 49525210, 49520200);
    $InitializeCommonEvent(1, 90015012, 0, 49520200);
    $InitializeCommonEvent(0, 90015020, 49520200, 49520800);
    $InitializeCommonEvent(0, 90015008, 49520205, 49520800, 920310, 49520800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49522200, 49520800);
        $InitializeCommonEvent(0, 90015023, 49520200, 40, 0, 49525210, 49520800, 905860000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49520200, 49525210, 40, 920310, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49520200, 0, 49525210, 1020, 920310, 110320, 905860000, 49520800);
        $InitializeCommonEvent(0, 90015470, 49522200, 49520200, 49520800, 49525210, 0, 0, 49525210);
        $InitializeCommonEvent(0, 90015446, 49525210, 49520200, 49520800, 49522200);
        $InitializeCommonEvent(0, 90015460, 49522200, 49520800);
        $InitializeCommonEvent(0, 90015460, 49522200, 0);
        $InitializeCommonEvent(0, 90015460, 49522200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49522200, 49520800);
        $InitializeCommonEvent(0, 90015475, 49522200, 0);
        $InitializeCommonEvent(0, 90015475, 49522200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49520800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49520000, 49520300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49520000, 49520300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49520000, 49520300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49520000, 49520300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49520000, 49520300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49520000, 49520300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49520000, 49520301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49520000, 49520301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49520000, 49520301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49520000, 49520301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49520000, 49520301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49520000, 49520301);
    }
});

$Event(495202800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49522810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(49520800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49520801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49520800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
