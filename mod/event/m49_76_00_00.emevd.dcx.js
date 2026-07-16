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
        if (EventFlag(49760000)) {
            $InitializeCommonEvent(0, 90055000, 49765200, 1, 49762200, 49760201);
            $InitializeCommonEvent(0, 90055001, 49765200, 1, 49760201, 49760200);
        }
        if (EventFlag(49760001)) {
            $InitializeCommonEvent(0, 90055000, 49765200, 2, 49762200, 49760201);
            $InitializeCommonEvent(0, 90055001, 49765200, 2, 49760201, 49760200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49760200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49762200, 49760200);
    }
    $InitializeCommonEvent(0, 90065910, 49760200, 49760205, 49760800, 941000, 690047, 49765210, 49760800, 905250601, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49760200, 49760800, 941000, 49765210, 49760800, 905250601, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49760800, 1, 0, 0, 1050, 941000, 905250601, 49760800);
    }
    $InitializeCommonEvent(0, 90015012, 49765210, 49760200);
    $InitializeCommonEvent(1, 90015012, 0, 49760200);
    $InitializeCommonEvent(0, 90015020, 49760200, 49760800);
    $InitializeCommonEvent(0, 90015008, 49760205, 49760800, 941000, 49760800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49762200, 49760800);
        $InitializeCommonEvent(0, 90015023, 49760200, 40, 0, 49765210, 49760800, 905250601, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49760200, 49765210, 40, 941000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49760200, 49760800, 49765210, 1020, 941000, 110320, 905250601, 49760800);
        $InitializeCommonEvent(0, 90015470, 49762200, 49760200, 49760800, 49765210, 0, 0, 49765210);
        $InitializeCommonEvent(0, 90015446, 49765210, 49760200, 49760800, 49762200);
        $InitializeCommonEvent(0, 90015460, 49762200, 49760800);
        $InitializeCommonEvent(0, 90015460, 49762200, 0);
        $InitializeCommonEvent(0, 90015460, 49762200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49762200, 49760800);
        $InitializeCommonEvent(0, 90015475, 49762200, 0);
        $InitializeCommonEvent(0, 90015475, 49762200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49760800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49760000, 49760300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49760000, 49760300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49760000, 49760300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49760000, 49760300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49760000, 49760300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49760000, 49760300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49760000, 49760301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49760000, 49760301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49760000, 49760301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49760000, 49760301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49760000, 49760301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49760000, 49760301);
    }
});

$Event(497602800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49762810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49760801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49760800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


