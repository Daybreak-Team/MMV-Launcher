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
        if (EventFlag(49540000)) {
            $InitializeCommonEvent(0, 90055000, 49545200, 1, 49542200, 49540201);
            $InitializeCommonEvent(0, 90055001, 49545200, 1, 49540201, 49540200);
        }
        if (EventFlag(49540001)) {
            $InitializeCommonEvent(0, 90055000, 49545200, 2, 49542200, 49540201);
            $InitializeCommonEvent(0, 90055001, 49545200, 2, 49540201, 49540200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49540200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49542200, 49540200);
    }
    $InitializeCommonEvent(0, 90065910, 49540200, 49542205, 49540800, 356000, 690047, 49540800, 49540800, 903800800, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49540200, 49540800, 356000, 49540800, 49540800, 903800800, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49540800, 2, 0, 0, 1050, 356000, 903800800, 49540800);
    }
    $InitializeCommonEvent(0, 90015012, 49540800, 49540200);
    $InitializeCommonEvent(0, 90015020, 49540200, 49540800);
    $InitializeCommonEvent(0, 90015008, 49542205, 49540800, 356000, 49540800, 16230, 0);
    $InitializeCommonEvent(0, 90065920, 49540800, 7315);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49542200, 49540800);
        $InitializeCommonEvent(0, 90015023, 49540200, 40, 0, 49540800, 49540800, 903800800, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49540200, 49540800, 40, 356000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49540200, 49540800, 49540800, 1020, 356000, 110320, 903800800, 49540800);
        $InitializeCommonEvent(0, 90015470, 49542200, 49540200, 49540800, 49540800, 0, 0, 0);
        $InitializeCommonEvent(0, 90015476, 10002, 49542200);
        $InitializeCommonEvent(0, 90015476, 10003, 49542200);
        $InitializeCommonEvent(0, 90015476, 10004, 49542200);
        $InitializeCommonEvent(0, 90065140, 49540800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015446, 49540800, 49540200, 49540800, 49542200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015460, 49542200, 49540800);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49542200, 49540800);
    }
    $InitializeCommonEvent(0, 90035001, 49540800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49540000, 49540300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49540000, 49540300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49540000, 49540300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49540000, 49540300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49540000, 49540300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49540000, 49540300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49540000, 49540301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49540000, 49540301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49540000, 49540301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49540000, 49540301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49540000, 49540301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49540000, 49540301);
    }
});

$Event(49542800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49542810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49540800, 20005, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49540801);
    CreateReferredDamagePair(49540801, chrEntityId);
    CreateReferredDamagePair(49540802, chrEntityId);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49540800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


